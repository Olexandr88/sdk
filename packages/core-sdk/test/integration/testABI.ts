import { getAddress } from "viem";

import IERC1155ABI from "../../src/abi/json/IERC1155.abi";
import AccessControllerABI from "../../src/abi/json/AccessController.abi";
import DisputeModuleABI from "../../src/abi/json/DisputeModule.abi";
import IPAccountImplABI from "../../src/abi/json/IPAccountImpl.abi";
import IPAssetRegistryABI from "../../src/abi/json/IIPAssetRegistry.abi";
import LicensingModuleABI from "../../src/abi/json/LicensingModule.abi";
import PILPolicyFrameworkManagerABI from "../../src/abi/json/PILPolicyFrameworkManager.abi";
import RegistrationModuleABI from "../../src/abi/json/RegistrationModule.abi";
import TaggingModuleABI from "../../src/abi/json/TaggingModule.abi";
import ErrorsABI from "../../src/abi/json/Errors.abi";
/*
 "AccessController": "0x674d6E1f7b5e2d714DBa588e9d046965225517c8",
    "ArbitrationPolicySP": "0xb41BC78478878B338336C5E7a34292213779cd6F",
    "DisputeModule": "0x3A96cad7b2aC783a6811c7c3e8DEF30E8a4cfcDb",
    "IPAccountImpl": "0x7481a227A11860E80f69AB39d0165258f4c139f6",
    "IPAccountRegistry": "0x74Cbd8CCc22290FeaaE8421D4FFc6760210B5B0C",
    "IPAssetRegistry": "0xb1534826Bc9D77d818CbC596435f530778C73865",
    "LicenseRegistry": "0x66f6865668F2B9213Ed05b97eE97beb97A75e243",
    "LicensingModule": "0x2ac240293f12032E103458451dE8A8096c5A72E8",
    "PILPolicyFrameworkManager": "0x3C30b98f56b469c0d292EFF5878e9Fb302CB13dD",
    "RegistrationModule": "0x193f0Cc84d51Fc38a30658d7eFffEB2C5Cc25840",
    "TaggingModule": "0x92787d8e2E5fE563A91Ee37B6e953BD0A4bAC1eD"
*/
export const IPAccountABI = [...IPAccountImplABI, ...ErrorsABI];

export const IPAssetRegistryConfig = {
  abi: IPAssetRegistryABI,
  address: getAddress("0xb1534826Bc9D77d818CbC596435f530778C73865"),
};

export const AccessControllerConfig = {
  abi: [...AccessControllerABI, ...ErrorsABI],
  address: getAddress("0x674d6E1f7b5e2d714DBa588e9d046965225517c8"),
};

export const DisputeModuleConfig = {
  abi: [...DisputeModuleABI, ...ErrorsABI],
  address: getAddress("0x3A96cad7b2aC783a6811c7c3e8DEF30E8a4cfcDb"),
};

export const LicenseRegistryConfig = {
  abi: IERC1155ABI,
  address: getAddress("0x66f6865668F2B9213Ed05b97eE97beb97A75e243"),
};

export const LicensingModuleConfig = {
  abi: LicensingModuleABI,
  //abi: [...LicensingModuleABI, ...ErrorsABI],
  address: getAddress("0x2ac240293f12032E103458451dE8A8096c5A72E8"),
};

export const RegistrationModuleConfig = {
  abi: RegistrationModuleABI,
  //abi: [...RegistrationModuleABI, ...ErrorsABI],
  address: getAddress("0x193f0Cc84d51Fc38a30658d7eFffEB2C5Cc25840"),
};

export const TaggingModuleConfig = {
  abi: [...TaggingModuleABI, ...ErrorsABI],
  address: getAddress("0x92787d8e2E5fE563A91Ee37B6e953BD0A4bAC1eD"),
};

export const PILPolicyFrameworkManagerConfig = {
  abi: PILPolicyFrameworkManagerABI,
  //abi: [...PILPolicyFrameworkManagerABI, ...ErrorsABI],
  address: getAddress("0x3C30b98f56b469c0d292EFF5878e9Fb302CB13dD"),
};
