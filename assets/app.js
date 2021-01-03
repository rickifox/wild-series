/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.scss';

// start the Stimulus application
import './bootstrap';

/**  as the above line seems to be bootstrap's documentation way of adding bootstrap to js,
 * and I don't know what stimulus is, I followed both bootstrap and symfony documents and put 
 * both ways hope this doesn't break things up ¯\_(ツ)_/¯
*/
const $ = require('jquery');
require('bootstrap');