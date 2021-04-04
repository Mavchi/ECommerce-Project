import React from 'react'
import TextField from '@material-ui/core/TextField'

const Search = () => {
    return (
        <React.Fragment>
            <TextField
                variant="outlined"
                required
                fullWidth
                id="search"
                label="Search"
                name="Search"
                autoComplete="search"
              />
        </React.Fragment>
    )
}

export default Search