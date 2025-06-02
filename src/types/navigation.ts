export type RootStackParamList = {
  Welcome: undefined;
  Main: { screen?: keyof MainTabParamList } | undefined;
  NewMeasureForm: undefined;
  ReportForm: undefined;
};

export type MainTabParamList = {
  HomeTab: undefined;
  History: undefined;
};