/*
 * Copyright © 2020 Cask Data, Inc.
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

package io.cdap.cdap.etl.api.batch;

import io.cdap.cdap.api.annotation.Beta;
import io.cdap.cdap.etl.api.Aggregator;
import io.cdap.cdap.etl.api.Reducer;

/**
 * An {@link Aggregator} used in batch programs. It implements the {@link Reducer} to achieve better performance.
 *
 * @param <GROUP_KEY> group key type. Must be a supported type
 * @param <GROUP_VALUE> group value type. Must be a supported type
 * @param <OUT> output object type
 */
@Beta
public abstract class BatchReduceAggregator<GROUP_KEY, GROUP_VALUE, OUT>
  extends BatchAggregator<GROUP_KEY, GROUP_VALUE, OUT> implements Reducer<GROUP_VALUE> {
}
