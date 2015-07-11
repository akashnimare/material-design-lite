/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

 function MaterialDialog(element) {
   'use strict';
   this.element_ = element;
   this.open = false;
   this.returnValue = '';
   this.init();
 }

MaterialDialog.prototype.show = function() {};
MaterialDialog.prototype.showModal = function() {};
MaterialDialog.prototype.close = function(returnValue) {};

componentHandler.register({
  constructor: MaterialDialog,
  classAsString: 'MaterialDialog',
  cssClass: 'mdl-js-dialog',
  widget: true
});
