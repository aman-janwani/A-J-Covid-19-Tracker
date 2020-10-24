const main = document.querySelector(".main");

const getCases = async () => {

    const response = await fetch("https://api.covid19api.com/summary");

    const data = await response.json();
    html2 = `
    <div class="content">
    <div class="country">
        <h1>World wide</h1>
    </div>
    <div class="details">

        <h1>NewConfirmed</h1>
        <h1>${data.Global.NewConfirmed}</h1>

    </div>
    <div class="details">

        <h1>NewDeaths</h1>
        <h1>${data.Global.NewDeaths}</h1>

    </div>
    <div class="details">

        <h1>NewRecovered</h1>
        <h1>${data.Global.NewRecovered}</h1>

    </div>
    <div class="details">

        <h1>TotalConfirmed</h1>
        <h1>${data.Global.TotalConfirmed}</h1>

    </div>
    <div class="details">

        <h1>TotalDeaths</h1>
        <h1>${data.Global.TotalDeaths}</h1>

    </div>
    <div class="details">

        <h1>TotalRecovered</h1>
        <h1>${data.Global.TotalRecovered}</h1>

    </div>
</div>`
        main.innerHTML += html2;

    for (let i = 0; i < 189; i++) {
        const html = `

                <div class="content">
                <div class="country">
                    <h1>${data.Countries[i].Country}</h1>
                </div>
                <div class="details">

                    <h1>NewConfirmed</h1>
                    <h1>${data.Countries[i].NewConfirmed}</h1>

                </div>
                <div class="details">

                    <h1>NewDeaths</h1>
                    <h1>${data.Countries[i].NewDeaths}</h1>

                </div>
                <div class="details">

                    <h1>NewRecovered</h1>
                    <h1>${data.Countries[i].NewRecovered}</h1>

                </div>
                <div class="details">

                    <h1>TotalConfirmed</h1>
                    <h1>${data.Countries[i].TotalConfirmed}</h1>

                </div>
                <div class="details">

                    <h1>TotalDeaths</h1>
                    <h1>${data.Countries[i].TotalDeaths}</h1>

                </div>
                <div class="details">

                    <h1>TotalRecovered</h1>
                    <h1>${data.Countries[i].TotalRecovered}</h1>

                </div>
            </div>`
        console.log(data);
        main.innerHTML += html;

    };

}
getCases();
