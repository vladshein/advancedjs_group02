import {ExerciseService} from "./exercises.js";
import {FiltersService} from "./filters.js";
import {SubscriptionsService} from "./subscriptions.js";
import {QuotesService} from "./quotes.js";


const exerciseService = new ExerciseService();
const filtersService = new FiltersService();
const subscriptionsService = new SubscriptionsService();
const quotesService = new QuotesService();

export {exerciseService, filtersService, subscriptionsService, quotesService};