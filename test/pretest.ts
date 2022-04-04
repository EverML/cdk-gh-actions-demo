import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import {DemoStack} from '../lib/demo-stack';

export function bootstrapTemplate(){
    const app = new cdk.App();
    const stack = new DemoStack(app, 'MyTestStack');
    return Template.fromStack(stack);
}

