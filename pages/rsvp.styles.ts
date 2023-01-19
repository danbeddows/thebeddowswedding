import { rem } from "polished";
import Subheading from "src/components/Subheading";
import styled, { css } from "styled-components";

export const RsvpPage = styled.div`
  max-width: 100%;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  @media (min-width: ${(props) => props.theme.bp.desktop}) {
    margin: 140px 40px;
  }
`;

export const GuestHeader = styled.div`
  display: flex;
  flex-align: row;
  align-items: center;
  justify-content: space-between;
`;

interface GuestProps {
  isHeader?: boolean;
}
export const Guest = styled.div<GuestProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  @media (min-width: ${(props) => props.theme.bp.desktop}) {
    flex-direction: row;
  }

  ${(props) =>
    props.isHeader &&
    css`
      background: var(--dark-blue);
      color: #fff;
      font-size: ${rem(14)};
      text-transform: uppercase;
      display: none;

      @media (min-width: ${(props) => props.theme.bp.desktop}) {
        display: flex;
      }
    `}

  > * {
    width: 100%;
    padding: 20px 0;

    input,
    select,
    textarea {
      width: 100%;
    }

    @media (min-width: ${(props) => props.theme.bp.desktop}) {
      width: auto;
      flex: 1;
      padding: 20px 10px;

      input,
      select,
      textarea {
        width: auto;
      }
    }
  }
`;

export const GuestName = styled.input`
  padding: 10px 14px;
  border-radius: 3px;
  border: 1px solid #444;
  font-size: 16px;
`;

export const GuestDecision = styled.select`
  padding: 10px 14px;
  border-radius: 3px;
  border: 1px solid #444;
  font-size: 16px;
  color: #000;
  -webkit-appearance: none;
  width: 100%;
  background: url(data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0Ljk1IDEwIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmZjt9LmNscy0ye2ZpbGw6IzQ0NDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmFycm93czwvdGl0bGU+PHJlY3QgY2xhc3M9ImNscy0xIiB3aWR0aD0iNC45NSIgaGVpZ2h0PSIxMCIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMiIgcG9pbnRzPSIxLjQxIDQuNjcgMi40OCAzLjE4IDMuNTQgNC42NyAxLjQxIDQuNjciLz48cG9seWdvbiBjbGFzcz0iY2xzLTIiIHBvaW50cz0iMy41NCA1LjMzIDIuNDggNi44MiAxLjQxIDUuMzMgMy41NCA1LjMzIi8+PC9zdmc+)
    no-repeat 95% 50%;
`;

export const GuestPhone = styled.input`
  padding: 10px 14px;
  border-radius: 3px;
  border: 1px solid #444;
  font-size: 16px;
`;

export const GuestDiet = styled.textarea`
  min-height: 80px;
  padding: 10px 14px;
  border-radius: 3px;
  border: 1px solid #444;
  font-size: 16px;
`;

export const GuestDesktopDelete = styled.div`
  display: none;

  @media (min-width: ${(props) => props.theme.bp.desktop}) {
    display: block;
    color: var(--dark-blue);
    margin-top: 8px;
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const GuestMobileDelete = styled.div`
  margin-bottom: 30px;
  color: var(--dark-blue);
  margin-top: 8px;
  cursor: pointer;
  text-decoration: underline;
  color: #f00;

  @media (min-width: ${(props) => props.theme.bp.desktop}) {
    display: none;
  }
`;

export const Error = styled.div`
  margin-top: 6px;
  color: #f00;
`;

export const GuestMobileHeading = styled.div`
  margin-bottom: 4px;
  font-size: ${rem(18)};
  font-weight: bold;

  @media (min-width: ${(props) => props.theme.bp.desktop}) {
    display: none;
  }
`;

export const GuestMobileTitle = styled(Subheading)`
  margin: 50px 0 0px;

  @media (min-width: ${(props) => props.theme.bp.desktop}) {
    display: none;
  }
`;
