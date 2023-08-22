import React, { useEffect, useState } from "react";
import ConfigPart from "./ConfigPart";
import ConfigList from "./ConfigList";
import { trivia_categories, trivia_levels } from "../../api/api_category.json";
import ConfigButton from "./ConfigButton";
import ConfigForm from "./ConfigForm";
import api from "../../api/api";

const defaultQueryParams = {
  amount: 5,
  category: null, // any category called => (id: 8, means any-category => should repalce null), number type
  difficulty: null, // any difficulty called => (id: 101, means any-difficulty => should replace null), number type
};

const ConfigQuiz = () => {
  const [queryParams, setQueryParams] = useState(defaultQueryParams);
  const difficultyTitleFromId = trivia_levels.find(
    (level) => level.id === queryParams.difficulty
  )?.name;

  // available questions count for selected(easy, medium, hard, all) difficulty level
  const [maxQuestionsCount, setMaxQuestionsCount] = useState(0);

  const updateQuestionsCount = (value) => {
    // if 'any-category' selected
    if (value === null) return;

    // if 'any-difficulty' selected
    if (queryParams.difficulty === 101) {
      setMaxQuestionsCount(value.total_question_count);
    } else {
      setMaxQuestionsCount(
        value[`total_${difficultyTitleFromId}_question_count`]
      );
    }
  };

  const handleSelectedItem = (type, id) => {
    setQueryParams((prev) => ({ ...prev, [type]: id }));
  };

  useEffect(() => {
    // check Maximum available question for any category with their difficulty level
    const checkMaximumQuestion = async () => {
      if (queryParams.category === 8) {
        updateQuestionsCount(null);
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

  return (
    <div className="parts-container">
      <ConfigPart title="Choose your favorite topic">
        <ConfigList
          data={trivia_categories}
          handleSelected={(id) => handleSelectedItem("category", id)}
          selectedId={queryParams.category}
        />
        <footer>
          <ConfigButton disabled={false}>Next</ConfigButton>
        </footer>
      </ConfigPart>
      <ConfigPart title="Choose difficulty level">
        <ConfigList
          data={trivia_levels}
          handleSelected={(id) => handleSelectedItem("difficulty", id)}
          selectedId={queryParams.difficulty}
        />
        <footer>
          <ConfigButton disabled={false}>Next</ConfigButton>
        </footer>
      </ConfigPart>
      <ConfigPart title="Number of questoins">
        <ConfigForm maxAmount={maxQuestionsCount} />
      </ConfigPart>
    </div>
  );
};

export default ConfigQuiz;
