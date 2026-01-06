import { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';
import { profileActions, profileReducer } from './model/slice/ProfileSlice';
import type { Profile, ProfileSchema } from './model/types/Profile';
import { ProfileCard } from './ui/ProfileCard/ProfileCard';

export { fetchProfileData, Profile, profileActions, ProfileCard, profileReducer, ProfileSchema };
