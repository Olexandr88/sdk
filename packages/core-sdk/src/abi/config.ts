import { getAddress } from "viem";

import IERC1155ABI from "./json/IERC1155.abi";
import AccessControllerABI from "./json/AccessController.abi";
import DisputeModuleABI from "./json/DisputeModule.abi";
import IPAccountImplABI from "./json/IPAccountImpl.abi";
import IPAssetRegistryABI from "./json/IIPAssetRegistry.abi";
import LicensingModuleABI from "./json/LicensingModule.abi";
import PILPolicyFrameworkManagerABI from "./json/PILPolicyFrameworkManager.abi";
import RegistrationModuleABI from "./json/RegistrationModule.abi";
import TaggingModuleABI from "./json/TaggingModule.abi";
import ErrorsABI from "./json/Errors.abi";

// Sepolia
/**
 {
  "main": {
    "AccessController": "0x31dd83a3FebB5fAD7F7bc8D4E05B623461B74a02",
    "AncestorsVaultLAP": "0x9Faa4E491a211bFa415d44554120B1b31b6f4e59",
    "ArbitrationPolicySP": "0x75e181d5eb307eCccf8d3b4724109eca14719A75",
    "DisputeModule": "0x11dAA3F573C4d6673BBE7f2D96B4C91073A0d55d",
    "Governance": "0xa18252Aa11Ff1B20b89C10109050CC46A4067b22",
    "IPAccountImpl": "0x7BBaB2BD68fd3990c8dA2c26334a6DF8Acc7E96E",
    "IPAccountRegistry": "0x7184bAdAdf24dc261C7C27BceFF53d7A25a06846",
    "IPAssetRegistry": "0xF59adB67B7CC87436A7CC41040A7dB24AE90aDB8",
    "IPAssetRenderer": "0x986d8E96b30b688FCD84e9A5A757C3d4304B47b6",
    "IPMetadataProvider": "0xfcD468A72F76e89F2Df517274063ef7210a32e2A",
    "IPResolver": "0xF0920314Fb4C375cdEB5b15c4e77277aCf36E3D7",
    "LicenseRegistry": "0x4D6a54B467332dF675cFa689cb294A4cB9122866",
    "LicensingModule": "0x0C72b24067a15994f91D92Fd9bA23eB5ebcF8378",
    "MockERC20": "0xd53C2A80D24F6B3Ff009E48CF88D3b482E8E1457",
    "MockERC721": "0xD3719824a768c139AAa7C5eFc8BDb5D1d13A1564",
    "MockTokenGatedHook": "0x2d3ED4354eD09B0E6aa252938aEF41920aB6FC40",
    "ModuleRegistry": "0x17Ad1cD06d44ae5F5480A675A4D8BD8DAED40410",
    "PILPolicyFrameworkManager": "0x49cF5C5523011F8B4A0489969096Eb68C571C197",
    "RegistrationModule": "0x248c8CbF469ec7CB22Dc9914E569920b93d717a3",
    "RoyaltyModule": "0x512bbF310452cC96E0E9818B0870EcA557b86d4D",
    "RoyaltyPolicyLAP": "0x8404061350BA0CA85c4E733B0be78c5519679003",
    "TaggingModule": "0xED445f1DeE74Cf470Aab47F4b63734653C4C9537"
  }
}
 */
export const IPAccountABI = [...IPAccountImplABI, ...ErrorsABI];

export const IPAssetRegistryConfig = {
  abi: IPAssetRegistryABI,
  address: getAddress("0xF59adB67B7CC87436A7CC41040A7dB24AE90aDB8"),
};

export const AccessControllerConfig = {
  abi: [...AccessControllerABI, ...ErrorsABI],
  address: getAddress("0x31dd83a3FebB5fAD7F7bc8D4E05B623461B74a02"),
};

export const DisputeModuleConfig = {
  abi: [...DisputeModuleABI, ...ErrorsABI],
  address: getAddress("0x11dAA3F573C4d6673BBE7f2D96B4C91073A0d55d"),
};

export const LicenseRegistryConfig = {
  abi: IERC1155ABI,
  address: getAddress("0x4D6a54B467332dF675cFa689cb294A4cB9122866"),
};

export const LicensingModuleConfig = {
  abi: LicensingModuleABI,
  //abi: [...LicensingModuleABI, ...ErrorsABI],
  address: getAddress("0x0C72b24067a15994f91D92Fd9bA23eB5ebcF8378"),
};

export const RegistrationModuleConfig = {
  abi: RegistrationModuleABI,
  //abi: [...RegistrationModuleABI, ...ErrorsABI],
  address: getAddress("0x248c8CbF469ec7CB22Dc9914E569920b93d717a3"),
};

export const TaggingModuleConfig = {
  abi: [...TaggingModuleABI, ...ErrorsABI],
  address: getAddress("0xED445f1DeE74Cf470Aab47F4b63734653C4C9537"),
};

export const PILPolicyFrameworkManagerConfig = {
  abi: PILPolicyFrameworkManagerABI,
  //abi: [...PILPolicyFrameworkManagerABI, ...ErrorsABI],
  address: getAddress("0x49cF5C5523011F8B4A0489969096Eb68C571C197"),
};
