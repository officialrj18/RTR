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

  //lifting state up

  const [searchTerm, setSearchTerm] = React.useState("");
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  //filter the stories staying only term which is met
  const searchedStories = stories.filter(story => story.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div>
      <h1>Rajendra Stories! </h1>
      <Search search={searchTerm} onSearch={handleSearch} />
      <hr />
      <List list={searchedStories} />
    </div>
  );
};

const Search = (props) => {
  return (
    <div>
      <label htmlFor="search">Search: </label>

      {/* //controlled component */}
      <input id="search" type="text" value={props.search} onChange={props.onSearch} />
      <p>
        Searching for <strong>{props.search}</strong>.
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
