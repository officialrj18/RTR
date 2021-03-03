import React from "react";

//CUSTOM HOOK
const useSemiPersistentState = (key,intialState) => {
  const [value, setValue] = React.useState(
    localStorage.getItem(key) || intialState
  );
//key helps the hook to use more than one..whithout overiding the "value" allocated item in 
// the local storage. 
  React.useEffect(() => {
    localStorage.setItem(key, value);
  }, [value,key]);

  return [value, setValue];
};

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


  // const [searchTerm, setSearchTerm] = React.useState(localStorage.getItem('search')||'React');
  
  
  const [searchTerm, setSearchTerm] = useSemiPersistentState('search','react');
  
  // React.useEffect(() => {
  //   localStorage.setItem("search", searchTerm);
  // }, [searchTerm]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

 

  //filter the stories staying only term which is met
  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Rajendra Stories! </h1>
      <Search search={searchTerm} onSearch={handleSearch} />
      <hr />
      <List list={searchedStories} />
    </div>
  );
};

//search component
const Search = ({ search, onSearch }) => {
  return (
    <div>
      <label htmlFor="search">Search: </label>

      {/* //controlled component */}
      <input id="search" type="text" value={search} onChange={onSearch} />
      <p>
        Searching for <strong>{search}</strong>.
      </p>
    </div>
  );
};

const List = ({ list }) => {
  return list.map((item) => <Item key={item.objectID} item={item} />);
};

const Item = ({ item }) => {
  return (
    <div>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>
    </div>
  );
};

/*
Variation 1: Nested Destructuring

const List = ({ list }) => {
  return list.map((item) => <Item key={item.objectID} item={item} />);
};

const Item = ({ item: { title, url, author, num_comments, points } }) => {
  return (
    <div>
      <span>
        <a href={url}>{title}</a>
      </span>
      <span>{author}</span>
      <span>{num_comments}</span>
      <span>{points}</span>
    </div>
  );
};


//Variaton 2: Spread Operator & Rest Operator (final)
const List = ({ list }) => {
  return list.map(({objectID, ...item}) => <Item key={objectID} {...item} />);
};

const Item = ({ title, url, author, num_comments, points  }) => {
  return (
    <div>
      <span>
        <a href={url}>{title}</a>
      </span>
      <span>{author}</span>
      <span>{num_comments}</span>
      <span>{points}</span>
    </div>
  );
};
*/

export default App;

/**git add remote 
  495  git add remote  https://github.com/officialrj18/RTR.git
  496  git remote add origin  https://github.com/officialrj18/RTR.git
  497  git remote
  498  git push -u origin master
  499  git status
*/
 // 67