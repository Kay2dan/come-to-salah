import React from "react";
import PropTypes from "prop-types";

const RecitationSection = ({ recitationId, recitations }) => {
  const { arabic, transliteration, translation } = recitations[recitationId[0]];
  let recitationContainer = [];
  for (let i = arabic.length - 1, j = 0; i >= 0; i--, j++) {
    recitationContainer.push(
      <div className="wordsContainer" key={j}>
        <span className="word arabicTxt">{arabic[i]}</span>
        <span className="word transliteration">{transliteration[i]}</span>
        <span className="word translation">{translation[i]}</span>
      </div>
    );
  }
  return (
    <div className="recitationTable">
      <div className="wordByWordContainer">{recitationContainer}</div>
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
  recitations: PropTypes.object.isRequired,
};

export default RecitationSection;
