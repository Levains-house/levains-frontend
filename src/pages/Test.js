import React, { useState, useEffect } from "react";
import axios from "axios";

const Test = (props) => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const Keyword = props.Keyword;
  const fetchUsers = async () => {
    try {
      // 요청이 시작 할 때에는 error 와 users 를 초기화하고
      setError(null);
      setUsers(null);
      // loading 상태를 true 로 바꿉니다.
      setLoading(true);
      //   axios.defaults.headers.get['header1'] = "";
      const response = await axios.get(
        "https://dapi.kakao.com/v2/local/search/keyword.json?sort=accuracy&page=1&size=10&category_group_code=AD5&query=" +
          "제주+" +
          Keyword,
        {
          headers: {
            Authorization: "KakaoAK d6b369d83af88f8ec547ff95b7f7fbd0",
          },
        }
      );
      setUsers(response.data); // 데이터는 response.data 안에 들어있습니다.
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;

  if (!users) return null;

  // props.setLat(users.documents[0].x)
  // props.setLong(users.documents[0].y);
  // return (
  //     // 맵으로 렌더링
  // );
  console.log(users);
};

export default Test;
