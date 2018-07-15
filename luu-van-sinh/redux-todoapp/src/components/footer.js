import React from 'react'
import FilterLink from '../containers/filter-link'
import { VisibilityFilters } from '../actions'
import Button from '../containers/clear-completed'

const Footer = () => (
  <div>
    <span>
      Show:
    </span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>
      All
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
      Active
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
      Completed
    </FilterLink>
    <Button />
  </div>
)
export default Footer
