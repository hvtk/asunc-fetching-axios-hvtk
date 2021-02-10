// console.log(axios);

async function displayPrizes() {
    //   console.log("hi?");
    const response = await axios.get(
        "https://ignoble-api.herokuapp.com/prizes?year=2020"
    );

    //   console.log("RES:", response.data.prizes);
    const prizeList = document.getElementById("prize-list");
    //   console.log(prizeList);

    for (const prize of response.data.prizes) {
        // console.log("PRIZE:", prize);
        const listItem = document.createElement("li");

        listItem.textContent = `${prize.year} - ${prize.type}: ${prize.description}`;
        // console.log("LISTITEM:", listItem);

        prizeList.appendChild(listItem);
    }
}

displayPrizes();
