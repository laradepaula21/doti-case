import React, { useEffect, useState } from "react";
import {StyledHomeLogin, StyledInputBotao,StyledBotaoLogin, StyledSelect } from "./styles"
import { Input } from "antd";
import api from "../../services/api";

export default function HomeLogin({searchSessions, getSessions}) {

  const [users, setUsers] = useState([]);
  const [value, setValue] = useState('')

  const onChange = (value) => {
    setValue(value);
  };
  
  const onSearch = (value) => {
    console.log('search:', value);
  };

  useEffect(() =>
        async function getUsers() {
            try {
                const res = await api.get("/usuarios");
                console.log(res.data)
                let options = []
                res.data.map(u => {
                    const user = {value: `${u._id}`, label: `${u.nome}`}
                    options.push(user)
                    setUsers(options);
                    }
                    )
            } catch (err) {
                console.log(err);
            }
        }, []
  )

  async function postSession() {
    if (value) {
      try {
        await api.post("/sessoes", {id_usuario: value});
        getSessions();
      } catch (err) {
        alert(err.response.data.message)
      }
    }
  }


  return (
    <StyledHomeLogin>
      <StyledInputBotao>
            <input type="text" placeholder="Pesquisar membros" onChange={searchSessions}/>
        </StyledInputBotao>
        <StyledInputBotao>
          <StyledSelect
          showSearch
          placeholder="Select a person"
          optionFilterProp="children"
          onChange={onChange}
          onSearch={onSearch}
          filterOption={(input, option) =>
            (option?.label ?? '').toLowerCase().startsWith(input.toLowerCase())
          }
          options={users}
          />
        <StyledBotaoLogin onClick={postSession}>Login</StyledBotaoLogin>
        </StyledInputBotao>
    </StyledHomeLogin>
  );
}