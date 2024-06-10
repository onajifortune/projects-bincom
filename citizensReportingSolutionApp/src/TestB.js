import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import EmptyState from "../components/EmptyState";
import ProgressBar from "../components/ProgressBar";
import { Uploading } from "../components/Uploading";

function TestB() {
  return (
    <View>
      {/* <EmptyState /> */}
      <Uploading />
      <ProgressBar progress={1} />
    </View>
  );
}

export default TestB;
