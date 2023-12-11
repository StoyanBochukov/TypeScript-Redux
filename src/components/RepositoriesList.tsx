import React, { useState } from 'react'
import { useSelector } from '../hooks/useTypedSelector'
import { useActions } from '../hooks/useActions'


const RepositoriesList: React.FC = () => {

    const [term, setTerm] = useState('')
    const { searchRepos } = useActions()
    const { data, error, loading } = useSelector((state) => state.repositories)

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

        {error && <h3>{error}</h3>}
        {loading && <h3>Loading...</h3>}
        {!error && !loading && 
         data.map((name) =><div key={name}>{name}</div>)}
    </div>
  )
}

export default RepositoriesList