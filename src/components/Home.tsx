import { useStore } from "@nanostores/react";
import { AppTheme } from "../styles/App.style";
import styled from "styled-components";
import {
  BigText,
  BottomNav,
  Button,
  ButtonGroup,
  ButtonIcon,
  ButtonLabel,
  Header,
  ListThumb,
  ListThumbLabel,
  ListThumbShadow,
  MenuIcon,
  UserBy,
  UserIcon,
  UserName,
  UserThumb,
  View,
} from "../styles/Home.style";
import { SuperStore } from "../stores/SuperStore.store";
import { DivLists } from "../styles/TodoList.style";
import { task } from "nanostores";
import { Link } from "react-router-dom";

// export function DisplayTaskLlist() {
//   <></>;
// }
export default function Home() {
  const { lists } = useStore(SuperStore);

  return (
    <>
      <Header>
        <h1>Mes Todos</h1>
      </Header>

      <View>
        <ul>
          <UserName></UserName>
        </ul>
      </View>
      <ul>
        {lists.map((list, index) => (
          <Link to={`/todo-list/${index}`} key={index}>
            <ListThumb>
              <UserThumb>
                <i className="fa-solid fa-user-large"></i>
                <View>
                  <UserBy>Par</UserBy>
                  <UserName>{list.user}</UserName>
                </View>
              </UserThumb>
            </ListThumb>
            List n°{index + 1} : {list.name}
          </Link>
          // <li key={index}><DisplayTaskList /></li>
        ))}
      </ul>

      <ButtonGroup>
        <Button>
          <i className="fa-solid fa-circle-plus"></i>
          <ButtonLabel>Nouvelle liste</ButtonLabel>
        </Button>
      </ButtonGroup>
      <BottomNav>
        <i className="fa-solid fa-bars"></i>
        <i className="fa-solid fa-user-large"></i>
      </BottomNav>
    </>
  );
}
