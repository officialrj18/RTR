import React from "react";

const App = () => {
  const stories = [
    {
      title: "React",
      url: "https://reactjs.org",
      author: "jordan Walke",
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: "Redux",
      url: "https://reactjs.org",
      author: "Dan Abramov,Andrew Clark",
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];

  const handleSearch = (event) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <h1>Rajendra Stories! </h1>
      <Search onSearch={handleSearch} />
      <hr />
      <List list={stories} />
    </div>
  );
};

const Search = (props) => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    props.onSearch(event);
  };

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />
      <p>
        Searching for <strong>{searchTerm}</strong>.
      </p>
    </div>
  );
};
const List = (props) => {
  return props.list.map((item) => {
    return (
      <div key={item.objectID}>
        <span>
          <a href={item.url}>{item.title}</a>
        </span>
        <span>{item.author}</span>
        <span>{item.num_comments}</span>
        <span>{item.points}</span>
      </div>
    );
  });
};

export default App;

/**git add remote 
  495  git add remote  https://github.com/officialrj18/RTR.git
  496  git remote add origin  https://github.com/officialrj18/RTR.git
  497  git remote
  498  git push -u origin master
  499  git status
   */
