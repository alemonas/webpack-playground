import nav from './nav';
import { top, bottom } from './footer';
import makeButton from './button';
import { makeColorStyle } from './button-style';

console.log(nav(), top, bottom, makeButton('create'), makeColorStyle('cyan'));
