const resultEl = document.querySelector(".result");
const searchEl = document.querySelector("input");
const houseURL = "https://anapioficeandfire.com/api/houses/378";

// STORE YOUR SWORN MEMBERS IN {members}
let members = [];
// =============================

/**
 *
 * REQUIREMENTS:
 *
 * 1. I should be able to see all {swornMembers}
 * after the page has loaded.
 * 2. When I type a query inside the input it should only
 * display members whose name includes the query
 */

const getSwornMembers = async () => {
  const houseData = await fetch(houseURL).then((response) => response.json());

  houseData.swornMembers.forEach(async (swornMemberUrl) => {
    const swornMember = await fetch(swornMemberUrl).then((response) =>
      response.json()
    );

    members.push(swornMember);

    renderSwornMember(swornMember);
  });

  //   displaySwornMembers(members);
};

// requirement 1
getSwornMembers();

const renderSwornMember = (swornMember) => {
  const li = document.createElement("li");
  const pName = document.createElement("p");
  const pLife = document.createElement("p");
  const pGender = document.createElement("p");
  const pCulture = document.createElement("p");

  pName.innerHTML = swornMember.name;
  pName.classList.add("name");

  pLife.innerHTML = swornMember.life;
  pLife.classList.add("life");

  pGender.innerHTML = swornMember.gender;
  pGender.classList.add("gender");

  pCulture.innerHTML = swornMember.culture;
  pCulture.classList.add("culture");

  li.append(pName);
  li.append(pLife);
  li.append(pGender);
  li.append(pCulture);

  resultEl.append(li);
};

const renderSwornMembers = (swornMembers) => {
  swornMembers.forEach((swornMember) => {
    renderSwornMember(swornMember);
  });
};

// requirement 2
searchEl.addEventListener("input", (event) => {
  // clear out members
  resultEl.innerHTML = "";

  // setup matching array
  const matchingSwornMembers = members.filter((member) => {
    if (member.name.toLowerCase().includes(event.target.value.toLowerCase())) {
      return true;
    } else {
      return false;
    }
  });

  renderSwornMembers(matchingSwornMembers);
});

/**
 * HTML for each member:
 * <li>
 *     <p class="name">Bilbo Baggins</p>
 *     <p class="life">1777 – 1888</p>
 *     <p class="gender"><strong>Gender: </strong>Male</p>
 *     <p class="culture"><strong>Culture: </strong>Hobbit</p>
 * </li>
 */
