import React, { useState } from 'react'
import { useActions } from '../hooks/useActions'


const RepositoriesList: React.FC = () => {

    const [term, setTerm] = useState('')
    const { searchRepos } = useActions()

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        searchRepos(term)
    }

  return (
    <div>
        <form onSubmit={onSubmit}>
            <input type="text" value={term} onChange={e => setTerm(e.target.value)} />
            <button>Search</button>
        </form>
    </div>
  )
}

export default RepositoriesList