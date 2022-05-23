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

const Profile = ({avatar, name, lastname, age, nationality}) => {
    return (
        <span className="profile">
            <div className="imgProfile">
                <img src={avatar} alt="profile photo"></img>
            </div>
            <div className="textData">
                <section className="personalData">
                    <h2>Personal Information:</h2>
                    <p>
                        Name: {name}
                    </p>
                    <p>
                        Lastname: {lastname}                     
                    </p>
                    <p>
                        Age: {age}
                    </p>
                    <p>
                        Nationality: {nationality}
                    </p>
                </section>

                <section className="experience">
                    <h2>Experience in movies</h2>
                    {
                        experience.map(item =>
                            <li key={item.id}>{item.movie}</li>
                        )
                    }    
                </section>

                <section className="education">
                    <h2>Education</h2>
                    {
                        education.map(item =>
                            <li key={item.id}>{item.institute}</li>
                        )
                    }    
                </section>

                <section className="bio">
                    <h2>Bio</h2>
                    <p>
                        {
                            bio
                        }
                    </p>
                </section>
            </div>
        </span>
    )
}

const { personalData, experience, education, bio } = state;


const App = (
    <div>
    <Nav/>
    <main>
        <Profile
            name={personalData.name}
            lastname={personalData.lastname}
            age={personalData.age}
            nationality={personalData.nationality}
            avatar={personalData.avatar}
        />
    </main>
    </div>
)


const htmlElement = document.getElementById("root");
ReactDOM.render(App, htmlElement);