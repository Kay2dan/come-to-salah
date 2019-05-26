export const methodData = [
  "University of Islamic Sciences, Karachi",
  "Islamic Society of North America",
  "Muslim World League",
  "Shia Ithna-Ansari",
  "Umm Al-Qura University, Makkah",
  "Egyptian General Authority of Survey",
  "Institute of Geophysics, University of Tehran",
  "Gulf Region",
  "Kuwait",
  "Qatar",
  "Majlis Ugama Islam Singapura, Singapore",
  "Union Organization islamic de France",
  "Diyanet İşleri Başkanlığı, Turkey",
  "Spiritual Administration of Muslims of Russia",
];

export const schoolData = ["Hanafi", "Shafi"];

export const salahTimesEndpoint = ({ lat, lng, method, school }) =>
  `http://api.aladhan.com/v1/timings/${Date.now() /
    1000}?latitude=${lat}&longitude=${lng}&method=${method}&school=${school}`;
