import Web3Store from './Web3Store'
import HomeStore from './HomeStore'
import ForeignStore from './ForeignStore'
import ErrorsStore from './ErrorsStore'
import GasPriceStore from './GasPriceStore'
import TxStore from './TxStore'

class RootStore {
  constructor() {
    this.errorsStore = new ErrorsStore(this)
    this.web3Store = new Web3Store(this)
    this.homeStore = new HomeStore(this)
    this.foreignStore = new ForeignStore(this)
    this.gasPriceStore = new GasPriceStore(this)
    this.txStore = new TxStore(this)
  }
}

export default new RootStore();