import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { AppTheme } from "./App.style";

/**
 * Affiche le header
 */
export const Header = styled.header`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

/**
 * View
 */

export const View = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

/**
 * Big text
 */
export const BigText = styled.p`
  font-family: ${AppTheme.font.lobster};
  font-size: 32px;
  padding: 8px;
  color: ${AppTheme.colors.softblack};
`;

/**
 * Barre de navigation du
 */
export const BottomNav = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${AppTheme.colors.greenOcean};
  flex-direction: row;
  justify-content: space-between;
  i {
    font-size: 1.5rem;
    color: ${AppTheme.colors.white};
    padding: 0.8rem;
  }
`;

/**
 * Icone font awesome pour le menu
 */
export const MenuIcon = styled(FontAwesomeIcon)`
  padding: 15px;
`;

/**
 * Miniature d'une liste de chose à faire
 */
export const ListThumb = styled.div`
  /* background-color: ${AppTheme.colors.greenOcean}; */
  color: black;
  align-items: center;
  margin-bottom: 14px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
`;

/**
 * Ombre porté d'une miniature
 */
export const ListThumbShadow = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 8,
  },
  shadowOpacity: 0.33,
  shadowRadius: 5,
  elevation: 8,
};

/**
 * Miniature d'un utilisateur
 */
export const UserThumb = styled.div`
  flex-direction: row;
  background-color: ${AppTheme.colors.white};
  opacity: 0.75;
  align-items: center;
  padding: 8px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

/**
 * Icone de l'utilisateur
 */
export const UserIcon = styled(FontAwesomeIcon)`
  margin-right: 8px;
`;

/**
 * Label de l'utilisat
 */
export const UserBy = styled.p`
  color: ${AppTheme.colors.red};
  font-size: 10px;
  font-family: ${AppTheme.font.poppins};
`;

/**
 * Nom de l'utilisateur
 */
export const UserName = styled.p`
  color: ${AppTheme.colors.greenOcean};
  font-size: 16px;
  font-family: ${AppTheme.font.poppins};
`;

/**
 * Label d'une miniature
 */
export const ListThumbLabel = styled.p`
  text-align: center;
  padding: 20px 0px;
  font-size: 20px;
  font-family: ${AppTheme.font.poppins};
  color: ${AppTheme.colors.white};
`;

/**
 * Groupe de bouton
 */
export const ButtonGroup = styled.div`
  align-items: center;
`;

/**
 * Bouton
 */
export const Button = styled.button`
  border-radius: 10px;
  background-color: ${AppTheme.colors.green};
  flex-direction: row;
  align-items: center;
  padding: 18px;
  i {
    font-size: 1.5rem;
    color: ${AppTheme.colors.white};
  }
`;

/**
 * Icon du bouton
 */
export const ButtonIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
`;

/**
 * Label tu bouton
 */
export const ButtonLabel = styled.p`
  color: ${AppTheme.colors.white};
  font-family: ${AppTheme.font.poppins};
  font-size: 18px;
`;
