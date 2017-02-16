import React from 'react';

const heroes = ['genji','mccree','pharah','reaper','soldier76','sombra','tracer','bastion','hanzo','junkrat','mei','torbjorn','widowmaker','dva','reinhardt','roadhog','winston','zarya','ana','lucio','mercy','symmetra','zenyatta'];
const heroesImg = heroes.reduce((obj,hero) => {
  obj[hero] = `https://findoverwatch.com/images/heroes/${hero}.png`
  return obj;
  },
{});

class Helper {
  static get HEROES() { return heroes};
  static get HERO_IMAGES() { return heroesImg};
  static getRandomTeam() {
    return this.HEROES.sort(() => .5 - Math.random()).slice(0, 6)
  }
}

export default Helper;
