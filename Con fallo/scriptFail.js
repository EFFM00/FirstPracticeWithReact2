const state = {
    personalData: {
        name: "Johnny",
        lastname: "Depp",
        age: 44,
        nationality: "American",
        residence: "France",
        occupation: "Actor / Producer",
        avatar: "https://m.media-amazon.com/images/M/MV5BMTM0ODU5Nzk2OV5BMl5BanBnXkFtZTcwMzI2ODgyNQ@@._V1_.jpg"
    },
    experience: [
        { id: 1, movie: "Pirates of the Caribbean"},
        { id: 2, movie: "Edward Scissors hand"},
        { id: 3, movie: "Johnny Brasco"}
    ],
    education: [
        { id: 1, institute: "University of Arts."},
        { id: 2, institute: "University UCLA"},
        { id: 3, institute: "University of Paris"}
    ],
    bio: "I am a person like everyone else, trying to have a normal life whilst doing the things that make me happy"
}

const Nav = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        Home
                    </li>
                    <li>
                        About
                    </li>
                    <li>
                        Career
                    </li>
                    <li>
                        Education
                    </li>
                </ul>
            </nav>
        </header>
    )
};

const Info = (props) => {
    return (
        <main>
            <section className="personalData">
                <img src={props.avatar} alt="profile photo"></img>
                <span className="personalDataInfo">
                    <h2>Personal Information:</h2>
                    <p>
                        Name: {props.personalData.name}
                    </p>
                    <p>
                        Lastname: {props.personalData.lastname}
                    </p>
                    <p>
                        Age: {props.personalData.age}
                    </p>
                    <p>
                        Nationality: {props.personalData.nationality}
                    </p>
                </span>
                </section>

            <section className="experience">
                <h2>Experience in movies</h2>
                {
                    props.experience.map(movie => {
                        <p key={movie.id}>Movie: {movie.movie}</p>
                    })
                }
                                
            </section>
            <section className="education">
            <h2>Education</h2>
                {
                    props.education.map( institute => {
                        <p key={institute.id}>Movie: {institute.institute}</p>
                    })
                }
            </section>
            <p className="bio">
                Bio: {props.bio}
            </p>
        </main>
    )
}
const App = (
    <div>
        <p>Hola</p>
        <Nav/>
        <Info
            props={state}
        />
    </div>
)


const htmlElement = document.getElementById("root");
ReactDOM.render(App, htmlElement);