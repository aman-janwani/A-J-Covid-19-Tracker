const main = document.querySelector(".main");

const getCases = async () => {

    const response = await fetch("https://api.rootnet.in/covid19-in/stats/latest");

    const data = await response.json();

    for (let i = 0; i < 36; i++) {
        const html = `

                <div class="content">
                <div class="country">
                    <h1>${data.data.regional[i].loc}</h1>
                </div>
                <div class="details">

                    <h1>ForeignCases</h1>
                    <h1>${data.data.regional[i].confirmedCasesForeign}</h1>

                </div>
                <div class="details">

                    <h1>IndianCases</h1>
                    <h1>${data.data.regional[i].confirmedCasesIndian}</h1>

                </div>
                <div class="details">

                    <h1>deaths</h1>
                    <h1>${data.data.regional[i].deaths}</h1>

                </div>
                <div class="details">

                    <h1>TotalConfirmed</h1>
                    <h1>${data.data.regional[i].totalConfirmed}</h1>

                </div>
                <div class="details">

                    <h1>discharged</h1>
                    <h1>${data.data.regional[i].discharged}</h1>

                </div>
            </div>`
        console.log(data);
        main.innerHTML += html;

    };

}
getCases();
