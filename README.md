# Project Overview

## Project Links

- [Project Repo](https://github.com/daffodil-dragons/Project-03-Client)
- [Deployment Link]()

## Project Description

This app will serve as a character sheet creator for a Dungeons & Dragons 5E player. They will be able to also update their character sheet as they play and level up. The frontend will allow you to input character information and update the display.

## User Stories

As a user I want to use an app to create a D&D character sheet, so that I can easily have access to updating and managing multiple character sheets at once.

## Wireframes

- [Mobile Wireframe](https://drive.google.com/file/d/1510R5brfHErKE-keiA72Jt2fVXRoA-kl/view?usp=sharing)
- [Tablet Wireframe](https://drive.google.com/file/d/19e_1z-FEEAHmrZXRxUSMt5nG1NpwD1SM/view?usp=sharing)
- [Desktop Wireframe](https://drive.google.com/file/d/11HCXAo_WUFjPhcpBU8qPBDMNUYnmSGO0/view?usp=sharing)

## React Architecture

- [Components](https://drive.google.com/file/d/1OHWkHqfjJRfXCMIU6Qk5ulPDfkVfj82v/view?usp=sharing)

### MVP/PostMVP - 5min

#### MVP

- Char. portrait
- Insert name
- Choose race
- Class choice
- Spell/Ability page input
- Stat block/input fields
- Backgrounds/dropdown, alignment, physical characteristics
- Skill/Saving throw proficiency marker

#### PostMVP

- Link to spell API
- Standard array stats
- Equipment
- Items
- NPC maker
- Dungeon master screen
- Tabbed info box
- Damge/heal HP button
- Long/short rest button
- Race info. pop up
- Class info. pop up

##### MVP Time Frame

| Component                             | Priority | Estimated Time | Actual Time |
| ------------------------------------- | :------: | :------------: | :---------: |
| Char. portrait                        |    L     |      1hrs      |    0 hrs    |
| Insert name                           |    H     |     0.5hrs     |   0.5 hr    |
| Choose race                           |    H     |      1hrs      |   0.5 hr    |
| Class choice                          |    H     |      1hrs      |   0.5 hr    |
| Stat block/input fields               |    H     |      1hrs      |    1 hr     |
| Backgrounds                           |    M     |      2hrs      |      0      |
| Skill/Saving throw proficiency marker |    L     |      2hrs      |      0      |
| Character Update                      |    L     |      2hrs      |   1.5 hrs   |
| Character Display                     |    L     |      2hrs      |   1.5 hrs   |
| About Us                              |    L     |      2hrs      |    1 hr     |
| Responsiveness / CSS                  |    H     |      4hrs      |    3 hrs    |
| Total                                 |          |    10.5hrs     |   9.5 hrs   |

##### PostMVP Time Frame

| Component                | Priority | Estimated Time | Actual Time |
| ------------------------ | :------: | :------------: | :---------: |
| Spell/Ability page input |    M     |      2hrs      |     1hr     |
| Link to spell API        |    L     |      2hrs      |             |
| Standard array stats     |    L     |      1hrs      |             |
| Equipment                |    H     |      2hrs      |             |
| Items                    |    H     |      2hrs      |             |
| NPC Maker                |    L     |      3hrs      |             |
| Dungeon master screen    |    L     |      2hrs      |             |
| Tabbed info box          |    H     |      3hrs      |             |
| Damge/heal HP button     |    M     |      1hrs      |             |
| Long/short rest button   |    M     |      2hrs      |             |
| Race info. pop up        |    L     |      2hrs      |             |
| Class info. pop up       |    L     |      2hrs      |             |
| Class info. pop up       |    L     |      2hrs      |             |
| Dice roll button         |    M     |      1hrs      |    1 hr     |
| Total                    |          |     23hrs      |    1 hr     |

## Additional Libraries

Bootstrap!

## Sources

Daniel - [Multi-step Form in React](https://www.youtube.com/watch?v=dybbUOmtd0Y)
Austin - [D20 Dice Roll function](https://masteringjs.io/tutorials/fundamentals/wait-1-second-then)

## Code Snippet

```js
function updateData(event) {
    if (event.target.id === "name") {
      setData({ ...data, name: event.target.value });
    } else if (event.target.id === "demographic") {
      setData({ ...data, demographic: event.target.value });
    } else if (event.target.id === "class") {
      setData({ ...data, class: event.target.value });
    } else if (event.target.id === "level") {
      setData({ ...data, level: event.target.value });
    } else if (event.target.id === "hp") {
      setData({ ...data, stats: { ...data.stats, hp: event.target.value } });
    } else if (event.target.id === "strength") {
      setData({
        ...data,
        stats: { ...data.stats, strength: event.target.value },
      });
    } else if (event.target.id === "dexterity") {
      setData({
        ...data,
        stats: { ...data.stats, dexterity: event.target.value },
      });
    } else if (event.target.id === "constitution") {
      setData({
        ...data,
        stats: { ...data.stats, constitution: event.target.value },
      });
    } else if (event.target.id === "intelligence") {
      setData({
        ...data,
        stats: { ...data.stats, intelligence: event.target.value },
      });
    } else if (event.target.id === "wisdom") {
      setData({
        ...data,
        stats: { ...data.stats, wisdom: event.target.value },
      });
    } else if (event.target.id === "charisma") {
      setData({
        ...data,
        stats: { ...data.stats, charisma: event.target.value },
      });
    }
  }

```
We could have used a switch statement, but opted for the longer path instead. Ya know, for readability.
