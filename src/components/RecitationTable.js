import React from "react";
import PropTypes from "prop-types";

const RecitationTable = ({ recitationId, recitations }) => {
  console.log("Inside RecitationTable component: ", recitationId);
  const { arabic, transliteration, translation } = recitations[recitationId[0]];
  return (
    <div className="recitationTable">
      {arabic.reverse().map((word, i) => (
        <div className="wordsContainer" key={i}>
          <span className="word arabicTxt">{word}</span>
          <span className="word transliteration">{transliteration[i]}</span>
          <span className="word translation">{translation[i]}</span>
        </div>
      ))}
    </div>
  );
};

RecitationTable.propTypes = {
  recitationId: PropTypes.array.isRequired,
  recitations: PropTypes.object.isRequired,
};

export default RecitationTable;
