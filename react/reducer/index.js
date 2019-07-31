import { combineReducers } from 'redux'
import {articles, loading, loaded} from './articles.js'
import {category} from './categories.js'
import {author} from './author.js'
import {filters} from './filters.js'
import {error} from './error.js'

const reducer = combineReducers({
  articles,
  loading,
  loaded,
  category,
  author,
  filters,
  error
})

export default reducer;
