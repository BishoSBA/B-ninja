import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Footer from "./components/Footer";
import ListItem from "./components/ListItem";
import Header from "./components/Header";
import PhonePreview from "./components/PhonePreview";
import Main from "./components/Main";

function App() {
	return (
		<div className="App">
			<div className=" items-center gap-8">
				<div className="flex flex-col rounded-b-3xl background-Image mb-36">
					<Header />
					<section className="flex flex-col lg:flex-row-reverse justify-center align-center lg:gap-8">
						<Main />
						<PhonePreview />
					</section>
				</div>
				<section className="pb-12 pt-64 sm:pt-48 md:pt-32 lg:flex lg:justify-center">
					<ul className="flex flex-col px-8 gap-8 lg:flex-row lg:justify-between lg:w-5/6">
						<ListItem
							icon="fa-store"
							title="Supermarket prices"
							desc="Over 2000 items, direct to your door, at normal supermarket
							prices!"
						></ListItem>
						<ListItem
							icon="fa-clock"
							title="Ultra-fast delivery"
							desc="Our riders bring your groceries, direct to your door, in
							minutes."
						></ListItem>
						<ListItem
							icon="fa-carrot"
							title="Fresh & Organic"
							desc="Choose from our large selection of fresh and organic items."
						></ListItem>
					</ul>
				</section>
			</div>

			<Footer />
		</div>
	);
}

export default App;
