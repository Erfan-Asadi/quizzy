import React, {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import ConfigPart from "./ConfigPart";
import ConfigList from "./ConfigList";
import { trivia_categories, trivia_levels } from "../../api/api_category.json";
import ConfigButton from "./ConfigButton";
import ConfigForm from "./ConfigForm";
import api from "../../api/api";
import { styled } from "styled-components";
import { QuizContext } from "../../contexts/QuizContextProvider";
import { useNavigate } from "react-router-dom";

const StyledConfigQuiz = styled.div`
  overflow: hidden;
  .parts-container {
    display: flex;
    width: 100%;
    transition: 0.24s ease-out;

    .config-part {
      width: 100%;
      flex-shrink: 0;
    }
  }
  footer {
    display: flex;
    justify-content: flex-end;
    margin-top: 25px;
  }
`;

const defaultQueryParams = {
  amount: null,
  category: null, // any category called => (id: 8, means any-category => should repalce null), number type
  difficulty: null, // any difficulty called => (id: 101, means any-difficulty => should replace null), number type
};

const ConfigQuiz = () => {
  const [queryParams, setQueryParams] = useState(defaultQueryParams);
  const [maxQuestionsCount, setMaxQuestionsCount] = useState(0); // available questions count for selected(easy, medium, hard, all) difficulty level
  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(true);
  const [activePart, setActivePart] = useState(0); // 0=category - 1=difficulty - 2=amount
  const firstRender = useRef(true);
  const slidesContainerRef = useRef(null);
  const { setQuestions } = useContext(QuizContext);
  const navigate = useNavigate();

  const difficultyTitleFromId = trivia_levels.find(
    (level) => level.id === queryParams.difficulty
  )?.name;

  const updateQuestionsCount = (value) => {
    // if 'any-difficulty' selected
    if (queryParams.difficulty === 101) {
      setMaxQuestionsCount(value.total_question_count);
    } else {
      setMaxQuestionsCount(
        value[`total_${difficultyTitleFromId}_question_count`]
      );
    }
  };

  const startQuiz = async () => {
    const categoryParameter =
      queryParams.category === 8 ? null : queryParams.category;
    const difficultyParameter =
      queryParams.difficulty === 101 ? null : difficultyTitleFromId;

    const apiUrl = `/api.php?amount=${queryParams.amount}${
      categoryParameter ? `&category=${categoryParameter}` : ""
    }${difficultyParameter ? `&difficulty=${difficultyParameter}` : ""}`;

    try {
      const { data } = await api.get(apiUrl);
      if (data.response_code === 0) {
        setQuestions(data.results);
        navigate("/quiz");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleSelectedItem = (type, id) => {
    setQueryParams((prev) => ({ ...prev, [type]: id }));
  };

  const handleSlides = () => {
    if (activePart <= 1) {
      const nextValue = activePart + 1;
      slidesContainerRef.current.style.transform = `translateX(-${nextValue}00%)`;
      setActivePart(nextValue);
      setIsNextButtonDisabled(true);
    }
  };
  useEffect(() => {
    // check Maximum available question for any category with their difficulty level
    const checkMaximumQuestion = async () => {
      if (queryParams.category === 8) {
        // we can't find maximum number of all questions, then set max number of questions that can be retrieved per call (50)
        setMaxQuestionsCount(50);
        return;
      }
      if (queryParams.category) {
        try {
          const { data } = await api.get(
            `/api_count.php?category=${queryParams.category}`
          );
          updateQuestionsCount(data.category_question_count);
        } catch (error) {
          console.error(error);
        }
      }
    };

    checkMaximumQuestion();
  }, [queryParams.difficulty]);

  // every time queryParams changes, active 'next-button' for getting to next Part
  useLayoutEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      setIsNextButtonDisabled(false);
    }
  }, [queryParams]);

  return (
    <StyledConfigQuiz>
      <div className="parts-container" ref={slidesContainerRef}>
        <ConfigPart title="Choose your favorite topic">
          <ConfigList
            data={trivia_categories}
            handleSelected={(id) => handleSelectedItem("category", id)}
            selectedId={queryParams.category}
          />
        </ConfigPart>
        <ConfigPart title="Choose difficulty level">
          <ConfigList
            data={trivia_levels}
            handleSelected={(id) => handleSelectedItem("difficulty", id)}
            selectedId={queryParams.difficulty}
          />
        </ConfigPart>
        <ConfigPart title="Number of questoins">
          <ConfigForm
            maxAmount={maxQuestionsCount}
            handleAmountValue={(value) =>
              setQueryParams({ ...queryParams, amount: value })
            }
          />
        </ConfigPart>
      </div>
      <footer>
        {activePart == 2 ? (
          <ConfigButton
            disabled={isNextButtonDisabled}
            clickHandler={startQuiz}
          >
            StartQuiz
          </ConfigButton>
        ) : (
          <ConfigButton
            disabled={isNextButtonDisabled}
            clickHandler={handleSlides}
          >
            Next
          </ConfigButton>
        )}
      </footer>
    </StyledConfigQuiz>
  );
};

export default ConfigQuiz;
