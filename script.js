document.getElementById("search").addEventListener("click", prayer);

function prayer() {
    let country = document.getElementById('country').value;
    let city = document.getElementById('city').value;

    // Construct the API URL for all prayer times in the specified city
    let prayerUrl = `http://api.aladhan.com/v1/timingsByCity?country=${country}&method=5&city=${city}`;
    getPrayer(prayerUrl);

    console.log(country);
    console.log(city);
    console.log("hi");
}

// Rest of your code remains the same...

// Update getPrayer function to handle all prayer times
let getPrayer = async (url) => {
    const response = await fetch(url);

    try {
        let data = await response.json();

        document.getElementById("prayerTimes").innerHTML = `
            <section id="list-topics" class="list-topics">
			<div class="container">
				<div class="list-topics-content">
					<ul>
						<li>
							<div class="single-list-topics-content">
								<div class="single-list-topics-icon">
                                <img  src="./assets/images/adhan/fajr.png"  style="width: 40px; height: 40px;" alt="">
								</div>
								<h2><a href="#">Fajr</a></h2>
								<p>${data.data.timings.Fajr}</p>
							</div>
						</li>
						
						<li>
							<div class="single-list-topics-content">
								<div class="single-list-topics-icon">
                                <img  src="./assets/images/adhan/dhuhr.png"  style="width: 40px; height: 40px;" alt="">
								</div>
								<h2><a href="#">Dhuhr</a></h2>
								<p>${data.data.timings.Dhuhr}</p>
							</div>
						</li>
						<li>
							<div class="single-list-topics-content">
								<div class="single-list-topics-icon">
                                <img  src="./assets/images/adhan/asr.png"  style="width: 40px; height: 40px;" alt="">
								</div>
								<h2><a href="#">Asr</a></h2>
								<p>${data.data.timings.Asr}</p>
							</div>
						</li>
						<li>
							<div class="single-list-topics-content">
								<div class="single-list-topics-icon">
                                <img  src="./assets/images/adhan/sunset.png"  style="width: 40px; height: 40px;" alt="">
								</div>
								<h2><a href="#">Maghrib</a></h2>
								<p>${data.data.timings.Maghrib}</p>
							</div>
						</li>
						<li>
							<div class="single-list-topics-content">
								<div class="single-list-topics-icon">
                                <img  src="./assets/images/adhan/isha.png"  style="width: 40px; height: 40px;" alt="">
								</div>
								<h2><a href="#">Isha</a></h2>
								<p>${data.data.timings.Isha}</p>
							</div>
						</li>
					</ul>
				</div>
			</div>

		</section>
            
            
            `;
    } catch (error) {
        console.log("error", error);
    }
}
