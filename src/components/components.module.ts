import { NgModule } from '@angular/core';
import { TestOneComponent } from './test-one/test-one';
import { AnotherComponent } from './another/another';
@NgModule({
	declarations: [TestOneComponent,
    AnotherComponent],
	imports: [],
	exports: [TestOneComponent,
    AnotherComponent]
})
export class ComponentsModule {}
