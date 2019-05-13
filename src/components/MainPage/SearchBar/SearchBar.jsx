import React from 'react'
import {SearchForm} from './SearchBarStyles'
import {SearchButton} from './SearchBarStyles'
import {SearchContent} from './SearchBarStyles'
import {Container} from './SearchBarStyles'
import {SearchSelect} from './SearchBarStyles'

const SearchBar = () => {
    return(
        <Container>
            <SearchContent>
                <SearchForm placeholder="find a project">
                </SearchForm>
                <SearchSelect>
                    <option>Front-end</option>
                    <option>Node.js</option>
                    <option>.NET</option>
                    <option>Python</option>
                    <option>Java</option>
                </SearchSelect>
                <SearchButton>
                    Search
                </SearchButton>

            </SearchContent>
        </Container>
    )
}

export default SearchBar;