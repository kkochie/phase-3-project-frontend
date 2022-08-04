// colors to use
//  white for main background
//  bluish for accents (#75B9BE)
//  charcole for text (383F51)
//  silver pink for background accents (#D$B3B3)

import styled from "styled-components";
import MemberProfileCard from "./memberProfileCards";

const Container = styled.div`

  display: flex;
  /* align-items: center; */
  justify-content: center;
  header{
    text-decoration: underline;

  }


`;

function MembersHomePage({sendMembersData}){

  const membersList = sendMembersData.map((eachMember)=>
      <MemberProfileCard key={eachMember.id} eachMember={eachMember}
      /> 
      );
  return(
      <Container>
          <header>
          <h1> Members Manager</h1>
          </header>
          <div className="cards">
          {membersList}
          </div>


      </Container>
  );
}
export default MembersHomePage;
