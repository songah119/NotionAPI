import styled from "styled-components";
function RecruitPage() {
  return (
    <StRecruitPage>
      <StTitle>Recruiting Form with Notion API</StTitle>
      <StForm>
        <StCard>
          <StQuestion>
            <label>1. write down your question in here</label>
            <p>write down your explanation in here</p>
          </StQuestion>
          <StAnswer placeholder="write down your answer in here"></StAnswer>
        </StCard>

        <StCard>
          <StQuestion>
            <label>2. write down your question in here</label>
            <p>write down your explanation in here</p>
          </StQuestion>
          <StAnswer placeholder="write down your answer in here"></StAnswer>
        </StCard>

        <StCard>
          <StQuestion>
            <label>3. write down your question in here</label>
            <p>write down your explanation in here</p>
          </StQuestion>
          <StAnswer placeholder="write down your answer in here"></StAnswer>
        </StCard>

        <StCard>
          <StQuestion>
            <label>4. write down your question in here</label>
            <p>write down your explanation in here</p>
          </StQuestion>
          <StAnswer placeholder="write down your answer in here"></StAnswer>
        </StCard>
      </StForm>

      <StSubmitBtn>submit</StSubmitBtn>
    </StRecruitPage>
  );
}
export default RecruitPage;

const StRecruitPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StTitle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StForm = styled.div`
  display: flex;
  flex-direction: column;

  width: 80%;

  padding: 2rem 0 2rem 0;
  gap: 3rem;

  background-color: lightgray;
`;

const StCard = styled.section`
  display: flex;
  flex-direction: column;

  padding-left: 2rem;
`;

const StQuestion = styled.section`
  display: flex;
  flex-direction: column;

  font-size: 20px;

  & > p {
    font-size: 15px;
    padding-left: 1rem;
    color: gray;
    margin-top: 0.5rem;
  }
`;

const StAnswer = styled.textarea`
  width: 70%;
  height: 10rem;
  margin-left: 1rem;
`;

const StSubmitBtn = styled.button`
  width: 6rem;
  height: 3rem;

  margin: 2rem 0 4rem 0;

  background-color: black;
  color: white;

  font-size: 20px;

  cursor: pointer;
`;
