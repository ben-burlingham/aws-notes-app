document.addEventListener('DOMContentLoaded', () => {
  let activeIndex = 0;
  const complete = [];

  const countCompleted = () => 
    complete.filter(v => v).length;

  const updateTopic = (str) => 
    document.getElementById('topic').innerHTML = str;

  const updateProgress = () => {
    const percent = Math.ceil((countCompleted() / TOPICS.length) * 100);
    document.getElementById('progress').style.backgroundImage = `linear-gradient(90deg, #359900 ${percent}%, transparent ${percent}%)`;
  };

  const showAnswer = (str) => 
    alert(TOPICS[activeIndex].bullets);

  const nextTopic = (_) => {
    if (countCompleted() === TOPICS.length) {
      updateTopic("No more topics found");
      return;
    }

    const randomIndex = Math.floor(Math.random() * TOPICS.length);

    if (complete[randomIndex] === true) {
      nextTopic();
      return;
    }

    activeIndex = randomIndex;
    updateTopic(TOPICS[activeIndex].topic);
  };

  const markComplete = () => {
    complete[activeIndex] = true;
    updateProgress();
    nextTopic();
  };

  document.getElementById('next').addEventListener('click', nextTopic);
  document.getElementById('answer').addEventListener('click', showAnswer);
  document.getElementById('complete').addEventListener('click', markComplete);

  updateProgress();
  nextTopic();
});
