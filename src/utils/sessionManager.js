export const createSession = (name) => {
  const session = {
    name,
    tasks: [],
    date: new Date(),
  };
  if (localStorage.getItem("sessions")) {
    const sessions = JSON.parse(localStorage.getItem("sessions"));
    const sessionExists = sessions.find((session) => session.name === name);
    if (sessionExists) {
      return;
    }
    sessions.push(session);
    localStorage.setItem("sessions", JSON.stringify(sessions));
  } else {
    localStorage.setItem("sessions", JSON.stringify([session]));
  }
};

export const saveSession = (name, tasks) => {
  const sessions = JSON.parse(localStorage.getItem("sessions"));
  const sessionsToBeSaved = sessions.map((session) => {
    if (session.name === name) {
      session.tasks = tasks;
    }
    return session;
  });
  localStorage.setItem("sessions", JSON.stringify(sessionsToBeSaved));
};
