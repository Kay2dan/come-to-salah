import React from "react";
import PropTypes from "prop-types";

const RecitationSection = ({ recitationId, recitations }) => {
  const { arabic, transliteration, translation } = recitations.find(
    passage => passage.id === recitationId[0]
  );
  return (
    <div className="recitationTable">
      <div className="wordByWordContainer">
        {arabic.map((word, i) => (
          <div className="wordsContainer" key={i}>
            <div className="word arabicTxt">{word}</div>
            <div className="word transliteration">{transliteration[i]}</div>
            <div className="word translation">{translation[i]}</div>
          </div>
        ))}
      </div>
      <div className="transliterationContainer">
        {transliteration.map((word, i) => (
          <span className="is-size-6" key={i}>
            {`${word} `}
          </span>
        ))}
      </div>
    </div>
  );
};

RecitationSection.propTypes = {
  recitationId: PropTypes.array.isRequired,
  recitations: PropTypes.array.isRequired,
};

export default RecitationSection;
