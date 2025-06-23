import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  //   fetching github data on mounting component

  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/hiteshchoudhary")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);

  const data = useLoaderData();
  console.log(data);

  return (
    <div className="flex justify-center p-4">
      <div className="text-center text-3xl bg-gray-600 text-white w-1/2 p-4">
        Name: {data.name}
        <br />
        UserName: {data.login}
        <br />
        Followers: {data.followers}
        <img src={data.avatar_url} alt="gitimg" className="w-72 mt-2" />
      </div>
    </div>
  );
}

export default Github;

// optimize way to fetch data using useLoaderData hook

export const githubData = async () => {
  const response = await fetch("https://api.github.com/users/Haski01");
  return response.json();
};
