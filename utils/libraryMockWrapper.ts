import { Address } from 'set-protocol-utils';
import {
  Bytes32MockContract,
  CommonMathMockContract,
  ERC20WrapperMockContract,
  ZeroExOrderDataHandlerMockContract
} from './contracts';

const ERC20WrapperMock = artifacts.require('ERC20WrapperMock');
const Bytes32Mock = artifacts.require('Bytes32Mock');
const CommonMathMock = artifacts.require('CommonMathMock');
const ZeroExOrderDataHandlerMock = artifacts.require('ZeroExOrderDataHandlerMock');


export class LibraryMockWrapper {
  private _contractOwnerAddress: Address;

  constructor(contractOwnerAddress: Address) {
    this._contractOwnerAddress = contractOwnerAddress;
  }

  /* ============ Deployment ============ */

  public async deployBytes32LibraryAsync(
    from: Address = this._contractOwnerAddress
  ): Promise<Bytes32MockContract> {
    const bytes32MockContract = await Bytes32Mock.new(
      { from },
    );

    return new Bytes32MockContract(
      web3.eth.contract(bytes32MockContract.abi).at(bytes32MockContract.address),
      { from },
    );
  }

  public async deployCommonMathLibraryAsync(
    from: Address = this._contractOwnerAddress
  ): Promise<CommonMathMockContract> {
    const truffleCommonMathLibrary = await CommonMathMock.new(
      { from },
    );

    return new CommonMathMockContract(
      web3.eth.contract(truffleCommonMathLibrary.abi).at(truffleCommonMathLibrary.address),
      { from },
    );
  }

  public async deployERC20WrapperLibraryAsync(
    from: Address = this._contractOwnerAddress
  ): Promise<ERC20WrapperMockContract> {
    const erc20WrapperMockContract = await ERC20WrapperMock.new(
      { from },
    );

    return new ERC20WrapperMockContract(
      web3.eth.contract(erc20WrapperMockContract.abi).at(erc20WrapperMockContract.address),
      { from },
    );
  }

  public async deployZeroExOrderDataHandlerLibraryAsync(
    from: Address = this._contractOwnerAddress
  ): Promise<ZeroExOrderDataHandlerMockContract> {
    const zeroExExchangeWrapperInstance = await ZeroExOrderDataHandlerMock.new(
      { from },
    );

    return new ZeroExOrderDataHandlerMockContract(
      web3.eth.contract(zeroExExchangeWrapperInstance.abi).at(zeroExExchangeWrapperInstance.address),
      { from },
    );
  }
}
