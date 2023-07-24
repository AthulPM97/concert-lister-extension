async function fetchData() {
  const options = {
    method: "GET",
    url: "https://concerts-artists-events-tracker.p.rapidapi.com/venue/past",
    params: {
      name: "Hollywood bowl",
      minDate: "2022-01-25",
      maxDate: "2023-01-30",
      page: "1",
    },
    headers: {
      "X-RapidAPI-Key": "81a5c3c5femsh66ea56df1782fbdp1a2c71jsnd77886b8fef8",
      "X-RapidAPI-Host": "concerts-artists-events-tracker.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(options);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchData();
