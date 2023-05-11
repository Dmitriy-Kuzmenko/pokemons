import { Container } from "@mui/material";
import { styled } from "styled-components";

export const ContainerStyles = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .filter_select {
    width: 80%;
    margin: 10px auto;
  }

  .skeleton-styles {
    width: 350px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    @media (max-width: 768px) {
      width: 200px;
    }
  }

  .selected-styles {
    width: 350px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    @media (max-width: 768px) {
      width: 220px;
    }
  }

  .pokemon--card {
    height: 350px;
    cursor: pointer;

    &:hover {
      box-shadow: 5px 10px #888888;
    }
    @media (max-width: 767px) {
      height: 200px;
    }

    @media (max-width: 560px) {
      height: 100%;
    }

    .pokemon_image {
      height: 200px;

      @media (max-width: 767px) {
        height: 70px;
      }
    }

    .pokemon_name {
      text-transform: capitalize;
      font-size: 22px;

      @media (max-width: 768px) {
        font-size: 14px;
      }
    }

    .pokemon_types {
      display: flex;
      flex-direction: row;
      align-items: center;

      div {
        margin: 5px;
      }

      @media (max-width: 767px) {
        flex-direction: column;
      }
    }
  }

  .pokemon--info {
    position: fixed;
    right: 100px;

    @media (max-width: 767px) {
      right: 10px;
      //   width: 200px;
    }
  }
`;
