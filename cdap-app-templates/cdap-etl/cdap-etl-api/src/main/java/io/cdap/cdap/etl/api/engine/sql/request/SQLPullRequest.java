/*
 * Copyright © 2021 Cask Data, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

package io.cdap.cdap.etl.api.engine.sql.request;

import io.cdap.cdap.api.annotation.Beta;
import io.cdap.cdap.api.data.schema.Schema;

/**
 * Class representing a Request to pull a dataset from a SQL engine.
 */
@Beta
public class SQLPullRequest {
  private final String datasetName;
  private final Schema datasetSchema;

  public SQLPullRequest(String datasetName, Schema datasetSchema) {
    this.datasetName = datasetName;
    this.datasetSchema = datasetSchema;
  }

  public String getDatasetName() {
    return datasetName;
  }

  public Schema getDatasetSchema() {
    return datasetSchema;
  }
}
