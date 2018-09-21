import React from 'react';

class Market extends React.Component {
  state = { coins: [], loading: true }

  componentDidMount() {
    fetch('https://api.coinmarketcap.com/v2/listings/ (Links to an external site.)')
      .then( res => res.json() )
      .then( coins => {
        this.setState({ coins, loading: false });
       });
  }

  render() {
    const { coins, loading } = this.state;
    if (loading) {
      return <span>...Loading Data</span>
    } else {
      return (
        <ol>
         { coins.map( c =>
             <li key={c.id}>{c.symbol} - ${c.name}</li>
           )
         }
       </ol>
     )
   }
  }
}

export default Market;